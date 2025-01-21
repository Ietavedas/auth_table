interface ErrorMap {
  [x: string]: string;
}

const ERRORS_MAP: ErrorMap = {
  ["Unauthorized"]: "Неверный логин или пароль"
}

export const useErrorMeessage = (error: string | null) => ERRORS_MAP[`${error}`] ?? "Неизвестная ошибка";