class TodoController < ApplicationController
  def index
    @projects = Project.includes(:todos)
  end

  def update
    @todo = Todo.find(params[:id])
    if @todo.isCompleted
      @todo.isCompleted = false
    else
      @todo.isCompleted = true
    end
    @todo.save
    redirect_to '/'
  end

  def create
    @todo = Todo.new(todo_params)
    @todo.save
    redirect_to '/'
  end

  private def todo_params
    params.require(:todo).permit(:text, :project_id)
  end
end
