json.array! @results do |result|
  json.content result.content
  json.searchable_id result.searchable_id
  json.searchable_type result.searchable_type
end
