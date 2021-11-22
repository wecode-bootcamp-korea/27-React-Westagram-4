import './CommentsHyeri.scss';

function CommentsHyeri(props) {
  return (
    <>
      {props.comments.map(function (data, i) {
        return (
          <div className="newComments">
            <div className="commentsInput">
              <div className="userName">harryshumjr</div>
              <div className="userTalk">{data}</div>
            </div>
            <div className="icon">
              <i className="far fa-heart" />
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CommentsHyeri;
