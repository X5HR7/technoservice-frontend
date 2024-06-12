import { useUpdateRequestStatusMutation } from '@features/request/request-api.slice.ts';
import { IFullRequest } from '@shared/libs/interfaces';

const useUpdateStatus = () => {
  const [updateMaster, { isLoading }] = useUpdateRequestStatusMutation();

  const handleStatusUpdate = async (
    requestId: string,
    status: 'pending' | 'in-progress' | 'completed'
  ) => {
    const request: IFullRequest = await updateMaster({ requestId, status }).unwrap();

    if (!request) console.log('error');

    return request;
  };

  return { handleStatusUpdate, isLoading };
};

export { useUpdateStatus };
