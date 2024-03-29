import { SharedVo } from '../base.vo';

export interface ILoginVo extends SharedVo {
  mobile: string;
  email: string;
  username: string;
  name: string;
  status: number;
  platform: string;
  isSuper: number;
  sponsorId: string;
  isSuccessSendEmail: string;
  lastLoginIp: string;
  lastLoginTime: string;
  token: string;
}

// export interface ILoginVo extends BaseVo<LoginResultVo> {}
