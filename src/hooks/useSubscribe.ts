import { API_ENDPOINTS } from '@/constants/api';
import { useAuthStore } from '@/stores/useAuthStore';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/useToast';

// 구독 시작 요청 (POST)
const startSubscription = async ({ userId }: { userId: number }) => {
	if (!userId) throw new Error('사용자 ID가 없습니다.');

	const response = await fetch(`${API_ENDPOINTS.SUBSCRIBERS.START}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ userId }),
	});

	if (!response.ok) {
		const errorText = await response.text();
		console.error('❌ 구독 요청 실패:', response.status, errorText);
		throw new Error(`구독 요청 실패: ${errorText}`);
	}

	return response.json();
};

// 구독 일시정지 (POST)
const pauseSubscription = async ({ userId }: { userId: number }) => {
	if (!userId) throw new Error('사용자 ID가 없습니다.');

	const response = await fetch(`${API_ENDPOINTS.SUBSCRIBERS.PAUSE}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ userId }),
	});

	if (!response.ok) {
		const errorText = await response.text();
		console.error('❌ 구독 일시정지 실패:', response.status, errorText);
		throw new Error(`구독 일시정지 실패: ${errorText}`);
	}

	return response.json();
};

// 구독 취소 요청 (DELETE)
const endSubscription = async ({ userId }: { userId: number }) => {
	if (!userId) throw new Error('사용자 ID가 없습니다.');

	const response = await fetch(`${API_ENDPOINTS.SUBSCRIBERS.CANCEL}`, {
		method: 'DELETE',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ userId }),
	});

	if (!response.ok) {
		const errorText = await response.text();
		console.error('❌ 구독 취소 실패:', response.status, errorText);
		throw new Error(`구독 취소 실패: ${errorText}`);
	}

	return response.json();
};

// 구독 상태 조회 (GET)
const fetchSubscriptionStatus = async ({ queryKey }: { queryKey: [string, number | undefined] }) => {
	const [, userId] = queryKey; // queryKey에서 userId를 추출

	if (!userId) {
		throw new Error('사용자 ID가 없습니다.');
	}

	const response = await fetch(`${API_ENDPOINTS.SUBSCRIBERS.STATUS(userId)}`, {
		method: 'GET',
		credentials: 'include',
		headers: { 'Content-Type': 'application/json' },
	});

	if (!response.ok) {
		const errorText = await response.text();
		console.error('❌ 구독 상태 조회 실패:', response.status, errorText);
		throw new Error(`구독 상태 조회 실패: ${errorText}`);
	}

	const data = await response.json();
	return data.status;
};

const fetchSubscriptionHistory = async ({ queryKey }: { queryKey: [string, number | undefined] }) => {
	const [, userId] = queryKey; // queryKey에서 userId를 추출

	if (!userId) {
		throw new Error('사용자 ID가 없습니다.');
	}

	const response = await fetch(`${API_ENDPOINTS.SUBSCRIBERS.HISTORY(userId)}`, {
		method: 'GET',
		credentials: 'include',
		headers: { 'Content-Type': 'application/json' },
	});

	if (!response.ok) {
		const errorText = await response.text();
		console.error('❌ 구독 기록 조회 실패:', response.status, errorText);
		throw new Error(`구독 기록 조회 실패: ${errorText}`);
	}

	const data = await response.json();
	return data;
};

// 구독 요청 & 취소 요청을 관리하는 훅
export const useSubscribeMutation = (refreshSubscriptionStatus: () => void) => {
	// 구독 요청
	const startMutation = useMutation({
		mutationFn: startSubscription,
		onSuccess: async () => {
			// 최신 구독 상태 반영
			await refreshSubscriptionStatus();
		},
		onError: (error: Error) => {
			console.error('🚨 구독 요청 실패:', error.message);
		},
	});

	// 구독 일시정지 요청
	const pauseMutation = useMutation({
		mutationFn: pauseSubscription,
		onSuccess: async () => {
			// 최신 구독 상태 반영
			await refreshSubscriptionStatus();
		},
		onError: (error: Error) => {
			console.error('🚨 구독 일시정지 실패:', error.message);
		},
	});

	// 구독 취소 요청
	const cancelMutation = useMutation({
		mutationFn: endSubscription,
		onSuccess: async () => {
			// 최신 구독 상태 반영
			await refreshSubscriptionStatus();
		},
		onError: (error: Error) => {
			console.error('🚨 구독 취소 실패:', error.message);
		},
	});

	return { startMutation, cancelMutation, pauseMutation };
};

// 구독 상태 관리 훅
export const useSubscribeStatus = () => {
	const { user, setUser } = useAuthStore();
	const queryClient = useQueryClient();

	// 구독 상태 조회 쿼리
	const {
		data: subscriptionStatus,
		isLoading: isStatusLoading,
		refetch: refetchStatus,
	} = useQuery<string, Error, string, [string, number | undefined]>({
		queryKey: ['subscriptionStatus', user?.id], // userId를 두 번째 인자로 전달
		queryFn: fetchSubscriptionStatus, // userId를 queryKey에서 추출하도록 설정
		enabled: !!user?.id, // 사용자가 존재할 때만 실행
		retry: 1,
		staleTime: 1000 * 60 * 5,
	});

	// 구독 기록 조회 쿼리
	const {
		data: subscriptionHistory,
		isLoading: isHistoryLoading,
		refetch: refetchHistory,
	} = useQuery<boolean[] | undefined, Error, boolean[] | undefined, [string, number | undefined]>({
		queryKey: ['subscriptionHistory', user?.id],
		queryFn: fetchSubscriptionHistory,
		enabled: !!user?.id,
		retry: 1,
		staleTime: 1000 * 60 * 5,
	});

	// 구독 기록 갱신 함수
	const refreshSubscription = async () => {
		await queryClient.invalidateQueries({ queryKey: ['subscriptionHistory', user?.id] });
		const { data } = await refetchHistory();

		if (data?.length === 0) {
			return undefined;
		} else {
			await queryClient.invalidateQueries({ queryKey: ['subscriptionStatus', user?.id] });
			const { data } = await refetchStatus();
			return data;
		}
	};

	const statusRef = useRef<boolean | null>(null);

	// Zustand 상태 업데이트 (구독 상태 변경 시)
	useEffect(() => {
		if (user?.id !== undefined) {
			// 구독 기록이 없으면 구독 상태를 undefined로 설정
			statusRef.current = subscriptionStatus === 'active' ? true : subscriptionStatus === 'paused' ? false : null;

			if (user.isSubscribed !== statusRef.current) {
				const updatedUser = { ...user, isSubscribed: statusRef.current };
				setUser(updatedUser);
			}
		}
	}, [subscriptionHistory, subscriptionStatus, user, setUser]);

	const status = statusRef.current;
	const isLoading = isStatusLoading || isHistoryLoading;

	return {
		status,
		isLoading,
		refreshSubscription,
	};
};

// 최종적으로 구독 상태 & 요청을 통합하는 훅
export const useSubscribe = () => {
	const { user } = useAuth();
	const { showToast } = useToast();
	const { status, isLoading, refreshSubscription } = useSubscribeStatus();
	const { startMutation, pauseMutation, cancelMutation } = useSubscribeMutation(refreshSubscription);

	const validateSubscribe = () => {
		if (!user) {
			showToast('로그인이 필요합니다.', 'info');
			return false;
		}

		if (!user.id) {
			console.error('❌ 유효하지 않은 userId:', user.id);
			showToast('로그인 정보를 불러올 수 없습니다.', 'error');
			return false;
		}

		if (user.isSubscribed === true) {
			showToast('이미 구독 중입니다.', 'warning'); // 관심사 기능이 구현되면 해당 관심사에 대해서만 이 에러 발생
			return false;
		}
	};

	const handleStart = () => {
		startMutation.mutate(
			{ userId: user!.id },
			{
				onSuccess: () => showToast('구독이 완료되었습니다!', 'success'),
				onError: () => showToast(`구독에 실패했습니다.`, 'error'),
			}
		);

		if (startMutation.isSuccess) {
			return true;
		} else if (startMutation.isError) {
			return false;
		}
	};

	const handlePause = () => {
		pauseMutation.mutate(
			{ userId: user!.id }, // 현재 로그인한 사용자 ID
			{
				onSuccess: () => {
					showToast('구독이 일시정지 되었습니다.', 'success');
				},
				onError: () => {
					showToast('구독 일시정지 중 오류가 발생했습니다.', 'error');
				},
			}
		);

		if (cancelMutation.isSuccess) {
			return true;
		} else if (cancelMutation.isError) {
			return false;
		}
	};

	const handleCancel = () => {
		cancelMutation.mutate(
			{ userId: user!.id }, // 현재 로그인한 사용자 ID
			{
				onSuccess: () => {
					showToast('구독이 취소되었습니다.', 'success');
				},
				onError: () => {
					showToast('구독 취소 중 오류가 발생했습니다.', 'error');
				},
			}
		);

		if (cancelMutation.isSuccess) {
			return true;
		} else if (cancelMutation.isError) {
			return false;
		}
	};

	const toggleSubscribe = () => {
		if (status === true) {
			handlePause();
		} else {
			handleStart();
		}
	};

	return {
		startMutation,
		pauseMutation,
		cancelMutation,
		handleStart,
		handlePause,
		handleCancel,
		toggleSubscribe,
		status,
		isLoading,
		refreshSubscription,
		validateSubscribe,
	};
};

export default useSubscribe;
