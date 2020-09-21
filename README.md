# onClick 추가하니 Form에 걸어놓은 onSubmit이 일어나지 않을 때

- https://www.python2.net/questions-475531.htm
- onClick함수에서 직접 onSubmit을 호출한다.

```js
 onClick={(e) => onWritebtnClick(e, onSubmit(e))}
```

# Parameter를 주고 받을 때는 순서도 중요하다

이벤트가 발생하는 곳에서 넘겨주는 parameter의 순서와 함수가 그 parameter를 받는 순서는 같아야 한다. 그렇지 않으면 setState() 할 때 값이 섞여버린다.

```js
  const onModifyClick = useCallback((e, number, userName, title, contents) => {
    e.preventDefault();
    setinitText({ number, userName, title, contents });
    setEditorOpenToModify(true);
  });
```

<br/>

```js
  <li
      className="board_item"
      onClick={(e) => onModifyClick(e, number, userName, title, contents)}
    >
```

# event에서 함수 호출할 때

나쁜 예

- function() : 이렇게 호출하면 rendering이 되자마자 함수가 실행되기 때문에 click event가 걸린 모든 곳에서 onRemove함수가 호출된다.

```js
<button
  className="btn btn_delete"
  type="submit"
  value="delete"
  onClick={onRemove(number)}
>
```

<br/>

좋은 예

- 화살표함수로 넣어주어야 특정 element에 click event가 일어날 때만 함수가 호출된다.

```js
<button
  className="btn btn_delete"
  type="submit"
  value="delete"
  onClick={(e) => onRemove(number)}
>
```

# onClick event의 parameter

onClick의 유일한 paramater(매개변수)는 e(event)이다. 다른 것은 전달할 수 없다.

# 게시글 Numbering

> boardData.length : 전체 게시물 수
> currentPage : 불러오는 페이지 번호(초기값이 1이기 때문에 '-1'을 해준다.)
> postsPerPage : 한페이지에 보여줄 목록 수
> i : 반복변수
>
> ((boardData.length - ((currentPage-1) * postsPerPage))- i)

BoardList에서 map을 한 elemtent 하나하나를 BoardItem에 뿌려주고 있기 때문에, index도 BoardList에서 돌아가고 있는 map 안에서 계산하여 BoardItem에 넘겨준다.

<br/>

BoardList
```js
{posts
  .sort((a, b) => {
    return new Date(b.number) - new Date(a.number);
  })
  .map((post,i) => (
    <BoardItem
      post={post}
      key={post.number}
      onModifyClick={onModifyClick}
      index={boardData.length - ((currentPage-1) * postsPerPage)-i}
    />
  ))}
```
<br/>

BoardItem
```js
  <li className="item_number">{index}</li>
```