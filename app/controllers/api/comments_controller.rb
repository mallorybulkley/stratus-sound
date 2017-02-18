class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.includes(:user).where(track_id: params[:trackId]).order(created_at: :desc)
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user = current_user

    if @comment.save
      render :show
    else
      render json: { errors: @comment.errors.full_messages }, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      render json: {}
    else
      render json: { errors: @comment.errors.full_messages }, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :track_id)
  end
end
