prawn_document do |pdf|

    impar = [270, 85]
    par = [0, -11]

    @user.each_with_index do |user, i|

      if i % 2 == 0
        values = par
      else
        values = impar
      end

      pdf.bounding_box([values[0], pdf.cursor+values[1]], :width => 255, :height => 85) do
        pdf.transparent(0.5) { pdf.dash(1); pdf.stroke_bounds; pdf.undash }
        pdf.font Rails.root.join("public/fonts/biko/Biko_Bold.ttf")
        pdf.move_down 10
        pdf.text user.first_name.upcase, :align => :center, size: 15
        pdf.move_down 5
        pdf.transparent(0.5) { pdf.dash(1); pdf.stroke_horizontal_rule }
        pdf.move_down 13
        pdf.text user.junior_enterprise_first.upcase, :align => :center, size: 12
        pdf.move_down 5
        pdf.text all_events_by_user(user), :align => :center, size: 12
      end

       if (i+1) % 16 == 0
        pdf.start_new_page
       end

    end

end