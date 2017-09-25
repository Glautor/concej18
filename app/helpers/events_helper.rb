module EventsHelper
  def active(index)
    index==0 ? 'active'  : ''
  end

  def grid_value(count_events)
    if count_events.count <=6
      a = 12 / count_events.count 
      a>2 ? a : 4
    else
      12
    end
  end
end
