require 'byebug'

class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where(track_id: params[:trackId])
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user = current_user
    @comment.track = Track.find(params[:trackId])

    if @comment.save
      render :show
    else
      render json: { errors: @comment.errors.full_messages }, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:commentId])
    if @comment.destroy
      render :show
    else
      render json: { errors: @comment.errors.full_messages }, status: 422
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end
end
