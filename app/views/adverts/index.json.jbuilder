json.array!(@adverts) do |advert|
  json.extract! advert, :id, :title, :message
	json.created_at advert.created_at.to_formatted_s(:long_ordinal)
  json.user advert.user.email
  json.url advert_url(advert, format: :json)
end
