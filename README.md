# Vue

## Vue 설치
- npm install vue
- npm install -g @vue/cli
- vue init <template-name> <project-name>
```
template-name 종류
1. webpack: webpack 빌드 도구와 vue-loader를 이용하는 옵션으로 linter, router, css preprocessing, 단위 테스트 도구들을 선택적으로 사용 가능
2. webpack-simple: webpack 빌드 도구와 vue-loader를 이용하는 옵션 간단한 프로젝트를 구성하는데 사용
3. browserify: browserify와 vuetify를 이용하는 옵션으로 linter와 단위 테스트 도구를 선택적으로 사용 가능
4. browserify-simple: browserify와 vuetify를 이용하는 간단한 옵션으로 작은 프로젝트를 구성하는데 사용
5. pwa-webpack: 빌드 도구를 이용하는 PWA 기반의 애플리케이션을 만드는데 사용
6. simple: 하나의 HTML안에서 Vue컴포넌트로 개발할 때 사용
```

## component 데이터 관리
- name
```
name 속성을 명시하는 것은 선택이나 두 가지 경우에는 꼭 명시 (명시하는게 맘 편할듯)
1. 컴포넌트 구조가 재귀적일 때 : name 속성이 없으면 컴포넌트를 재귀적으로 구성할 수 없다
2. Vue 개발자 도구를 사용할 때
```
- components
- mixins
- data
- computed
- created
- methods
- watch
- beforeDestroy
