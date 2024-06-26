# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

- suspense
- route v6
- node 18

vite + typescript

- 새로운 기술?을 잘 사용하고 코딩 스타일을 보여주기 위함
- 주석을 잘 사용할 것.
- jsdoc등을 활용해보자
- storybook도 좋긴한데, 활용할 컴포넌트가 없어서 기초세팅밖에 안될듯
- 테스트 코드 작성 (jest)
- 웹앱 기반
- css를 활용할 라이브러리도 확인을 좀 해보자
- 페이지 화면들에 관련 내용 설명과 코드가 가독성있게 배치되면 좋을 것 같음.
- 예) App.jsx : 루트url, 세팅된 라이브러리(팝업, 라우팅 등)에 대한 역할과 설명, 버전정보, 채택이유
- Route는 어떤 식으로 코드 스플리팅 했는지,
- 헤더 : 헤더에는 유저, 관리자 등으로 로그인할 수 있는 버튼, 로그아웃 기능, 사이드 메뉴
- User.js : User url, 유저 토
- 풋터 : GNB형식으로, User로 진입했을 떄엔 User에서 들어갈 수 있는 페이지들 표출

## 권한별 라우팅 세팅

- 권한 : user, admin

## 공통 팝업

## 로딩과 네트워크 통신 (suspense)

## 사이드 메뉴, 풋터, 헤더 등 레이아웃

기획

기술 스택

vite, typescript, react, ts-jest
