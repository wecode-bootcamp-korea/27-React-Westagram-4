function NewCommentSungjae(props) {
  return (
    <>
      {props.댓글들.map(function (데이터, i) {
        return (
          <div className="newcomment">
            <div className="leftbox">
              <div className="leftbox-username">wecode-bootcamp</div>
              <div className="leftbox-article">{데이터}</div>
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

export default NewCommentSungjae;
