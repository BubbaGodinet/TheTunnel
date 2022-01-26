class FriendsController < ApplicationController

    def index
        render json: Friend.all
    end

    def create 
        friend = @current_user.friendee_relationships.create(friends_params)
        render json: friend, status: :created
    end

    def destroy 
        # @current_user.friendees.destroy
        @current_user.friendees.destroy(User.find(params[:id]))
    end

    private 

    def friends_params 
        params.permit(:friendee_id)
    end
end
