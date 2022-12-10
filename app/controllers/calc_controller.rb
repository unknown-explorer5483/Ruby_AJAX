# frozen_string_literal: true

# :reek:TooManyStatements
# :reek:DuplicateMethodCall
# :reek:InstanceVariableAssumption

# controller for response
class CalcController < ApplicationController
  def input; end

  def view
    @result = [*1..params[:less_than_number].to_i].select { |num| (num**2).to_s.reverse == (num**2).to_s }
                                                  .map { |num| [num, num**2] }

    respond_to do |format|
      format.html
      format.json do
        render json:
        { value: @result }
      end
    end
  end
end
