json.extract! @advert, :id, :title, :message, :updated_at, :user_id
json.user @advert.user.email
json.created_at @advert.created_at.to_formatted_s(:long_ordinal)