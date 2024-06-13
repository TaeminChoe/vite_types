interface TokenTypes {
  tokenKeyName: string;
  keyValue: string;
  userName: string;
  sort: "00" | "01";
  // permission: string;
}

/**
 * 토큰 생성 함수
 * 생성된 토큰은 localStorage에서 관리한다.
 * 만료 기능을 위해 localStorage를 활용
 */
export const makeLoginToken = (
  { tokenKeyName = "token", keyValue, userName, sort }: TokenTypes,
  tts = 86400000
) => {
  // 만료기간 tts(default : 1day)로 설정하여 토큰 생성
  const tokenValue = {
    value: keyValue,
    userName,
    sort,
    expire: Date.now() + tts,
  };
  console.log("local storage에 token 저장");
  console.log(tokenValue);
  // localStorage에 저장
  localStorage.setItem(tokenKeyName, JSON.stringify(tokenValue));
};

/**
 * 토큰 검증 함수
 * 1. 토큰이 없을 때 : false
 * 2. 토큰이 있을 때
 *  2-1. 만료기간이 지난 토큰 : false
 *  2-2. 만료기간이 지나지 않은 토큰 : true
 */
export const loginTokenExpiry = (tokenKeyName = "token") => {
  const localLoginToken = JSON.parse(
    localStorage.getItem(tokenKeyName) as string
  );

  if (!localLoginToken) return false;

  if (Date.now() > localLoginToken.expire) {
    localStorage.removeItem(tokenKeyName);
    return false;
  } else {
    return true;
  }
};
