# onClick 추가하니 Form에 걸어놓은 onSubmit이 일어나지 않을 때

- https://www.python2.net/questions-475531.htm
- onClick함수에서 직접 onSubmit을 호출한다.

```
 onClick={(e) => onWritebtnClick(e, onSubmit(e))}
```
