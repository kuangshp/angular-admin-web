export interface BaseVo<T> {
  readonly code: number;
  readonly message: string;
  readonly result: T;
}

export interface SharedVo {
  readonly id: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
}
