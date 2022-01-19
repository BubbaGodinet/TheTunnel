class ScoresController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index 
        render json: Score.all
    end

    def create 
        score = Score.create!(score_params)
        render json: score, status: :created
    end

    def destroy
        score= Score.find_by(id: params[:id])
        score.destroy
        head :no_content
    end

    private

    def score_params
        params.permit(:score, :user_id)
    end
end
