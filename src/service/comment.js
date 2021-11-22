class Comment {
  constructor() {
    this.getRequestOptions = { method: 'GET' };
  }

  async getCommentData() {
    const response = await fetch(
      'http://localhost:3000/data/commentData.json',
      this.getRequestOptions
    );
    const result = await response.json();
    return result;
  }
}

export default Comment;
