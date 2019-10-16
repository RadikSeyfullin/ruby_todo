class TodoController < ApplicationController
  def index
    @projects = Project.all
    @todos = Todo.all
  end

  def update
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
