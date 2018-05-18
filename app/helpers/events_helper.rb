module EventsHelper
  def active(index)
    index==0 ? 'active'  : ''
  end

  def grid_value(count_events)
    case count_events.count
    when 1
      return 12
    when 2
      return  6
    else
      4   
    end
  end
end
