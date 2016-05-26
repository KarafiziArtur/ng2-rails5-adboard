json.extract! current_user, :id, :email
json.created_at current_user.created_at.to_formatted_s(:long_ordinal)
json.updated_at current_user.updated_at.to_formatted_s(:long_ordinal)
json.last_sign_in_at current_user.last_sign_in_at.to_formatted_s(:long_ordinal)