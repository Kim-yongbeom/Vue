# Vue

## Vue 설치
- npm install vue
- npm install -g @vue/cli
- vue create 프로젝트명
```
template-name 종류
1. webpack: webpack 빌드 도구와 vue-loader를 이용하는 옵션으로 linter, router, css preprocessing, 단위 테스트 도구들을 선택적으로 사용 가능
2. webpack-simple: webpack 빌드 도구와 vue-loader를 이용하는 옵션 간단한 프로젝트를 구성하는데 사용
3. browserify: browserify와 vuetify를 이용하는 옵션으로 linter와 단위 테스트 도구를 선택적으로 사용 가능
4. browserify-simple: browserify와 vuetify를 이용하는 간단한 옵션으로 작은 프로젝트를 구성하는데 사용
5. pwa-webpack: 빌드 도구를 이용하는 PWA 기반의 애플리케이션을 만드는데 사용
6. simple: 하나의 HTML안에서 Vue컴포넌트로 개발할 때 사용
```

## vue 라이프사이클
```
1. 인스턴스의 생성 (create)
2. 생성된 인스턴스를 화면에 부착 (mount)
3. 화면에 부착된 인스턴스의 내용 갱신 (update)
4. 인스턴스가 소멸 (destory)
```

## vue 템플릿 문법
```
1. v-on:click="매핑되는 메서드 명": 클릭을 할 때 실행되는 메서드와 매핑시켜준다
2. v-on:keyup.enter="addTodo": 마우스 클릭이 아닌 enter 키를 통해서 입력가능
3. v-bind:key="xxxx": 뷰 인스턴스의 데이터 속성을 해당 HTML 요소에 연결
4. v-model="xxxx": v-bind & v-on을 합쳐놓은것
5. v-for="(todoItem,index) in todoItems", v-bind:key="todoItem.item": 연결된 뷰 데이터를 
for문으로 돌릴 수 있다. todoItem만 넣고 돌려도됨, 인덱스를 추가하면 자동으로 인덱스 매겨줌,
이때 v-bindLkey="xxx" 여기는 유니크한 String or 숫자만 가능
6. v-bind:class="{적용할 css: 특정값}": 특정 값의 true, false 여부에 따라서 css를 적용할 수 있다.
7. v-bind: 내려보낼 프롭스 속성 이름="현재 위치의 컴포넌트 데이터 속성"
8. v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명": emit을 받을 때
```

## component 데이터 관리
- name
```
name 속성을 명시하는 것은 선택이나 두 가지 경우에는 꼭 명시 (명시하는게 맘 편할듯)
1. 컴포넌트 구조가 재귀적일 때 : name 속성이 없으면 컴포넌트를 재귀적으로 구성할 수 없다
2. Vue 개발자 도구를 사용할 때
```
- el
```
인스턴스가 그려지는 화면의 시작점
```
- components
```
컴포넌트 호출
```
- mixins
```
컴포넌트 간에 공통으로 사용하고 있는 로직, 기능들을 재사용하는 방법
믹스인에 정의할 수 있는 재사용 로직은 data, methods, created 등과 같은 컴포넌트 옵션이 있다
```
- data
```
컴포넌트 인스턴스에 데이터 객체를 반환하는 함수
```
- computed
```
데이터의 값에 따라서 바뀌는 값을 정의하는 속성
```
- watch
```
데이터에서 정의한 속성이 변경됐을 때 추가 동작을 정의
대부분의 경우 computed 속성이 더 적합하지만 사용자가 만든 감시자가 필요한 경우가 있음
데이터 변경에 대한 응답으로 비동기식 또는 시간이 많이 소요되는 조작을 수행하려는 경우에 유용
```
- computed 와 watch의 차이점
```
computed: 선언형 프로그래밍 방식
- 계산된 값을 출력하기 위함

watch: 명령형 프로그래밍 방식
- 어떤 조건이 되었을때 함수를 실행시키기 위함
- 데이터를 감시해 값이 변화할 때마다 정의한 함수가 실행

watch를 사용하면, API를 호출하고 그 결과에 대한 응답을 받기 전까지 중간 상태를 설정할 수 있음
computed를 사용하면, API 호출 결과를 기다리는 동안의 중간 상태를 설정할 수 없음
(중간상태???)
```
- methods
```
이벤트 함수들 정의
```
- computed 와 methods의 차이점
```
computed
- 종속 대상이 변경될 때만 함수 호출
- 데이터값이 변하지 않는 한 여러번 호출하여도 다시 계산하지 않고 캐싱 결과를 즉시 반환
methods
- 매번 새로 호출해서 계산
- 호출할 때마다 새롭게 계산을 해야 하는 경우 methods 사용
```

## vue 라이프사이클
- created
```
인스턴스가 작성된 후 동기적으로 호출
이 단계에서 인스턴스는 데이터 처리, 계산된 속성, 메서드, 감시/이벤트 콜백 등과 같은 옵션 처리를 완료
그러나 마운트가 시작되지 않았으므로 $el 속성을 사용할 수 없음

데이터 초기화에 대한 목적이다
```
-mounted
```
인스턴스가 마운트된 후 호출
```
- beforeDestroy
```
인스턴스가 소멸되기 직전에 호출되는 단계
이벤트 리스너를 해체하거나 이벤트 버스를 off 하는 등 인스턴스가 사라지기 전에 해야할 일들을 처리하는 것이 좋음
아직 인스턴스에 접근할 수 있기 때문에 뷰 인스턴스의 데이터를 삭제해야한다면 삭제 가능
```

## Props
- https://velog.io/@tobo/vue.js-Prop-%EC%82%AC%EC%9A%A9%EB%B0%A9%EB%B2%95

## Vuex
- state
```
Vue 컴포넌트에서 data로 볼 수 있음
직접적인 변경은 불가능하고 mutation을 통해서 변경이 가능
```
- mutations
```
state를 변경하는 유일한 방법
mutation은 함수로 구현되며 첫 번째 인자는 state를 받을 수 있으며, 두번째 인자는 payload를 받을 수 있음
payload는 여러 필드를 포함할 수 있는 객체 형태도 가능
Hepler를 사용하지 않는 경우는
commit을 통해서만 호출함
```
- actions
```
mutation과 달리 비동기 작업이 가능
commit이 가능하여 action에서도 mutation을 통해 state를 변경
action에서는 첫 번째 인자를 context 인자로 받을 수 있으며
이 context에는 state, commit, dispatch, rootstate와 같은 속성들을 포함
두 번째 인자는 mutation과 동일하게 payload로 받음
action은 dispatch를 통해 호출한다.
```
- vuex-persistedstate
```
새로고침시 store의 데이터가 사라지는것을 방지해주는 라이브러리
```
- vuex 흐름
```
actions -> mutations -> state
```
