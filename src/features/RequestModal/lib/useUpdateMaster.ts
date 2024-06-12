import { useUpdateRequestMasterMutation } from '@features/request/request-api.slice.ts';
import { IFullRequest } from '@shared/libs/interfaces';

const useUpdateMaster = () => {
  const [updateMaster, { isLoading }] = useUpdateRequestMasterMutation();

  const handleMasterUpdate = async (requestId: string, masterId: string) => {
    const request: IFullRequest = await updateMaster({ requestId, masterId }).unwrap();

    if (!request) console.log('error');

    return request;
  };

  return { handleMasterUpdate, isLoading };
};

export { useUpdateMaster };
