class Manual
  def initialize(manufacturer, model, manual_title, pdf_url, thumbnail_url)
    @manufacturer = manufacturer
    @model = model
    @manual_title = manual_title
    @pdf_url = pdf_url 
    @thumbnail_url = thumbnail_url
  end

  def self.get_manual_objects(manufacturer, model) #add max_number_of_manuals parameter
    converted_model = Manual.convert_model(manufacturer, model)
    
    manuals_search_url = "http://www.manualsonline.com/search.html?q=#{manufacturer}%20#{converted_model}"
    
    doc = Nokogiri::HTML(open(manuals_search_url))
    manual_web_pages = []
  
    max_number_of_manuals = 5
    # make a list of the web pages
    doc.xpath('//h5/a').take(max_number_of_manuals).each do |node|
      theWebPage = node.attributes["href"].value
      if theWebPage.start_with?("http") #exclude support inquiries
        manual_web_pages << theWebPage 
      end
      # https://blog.engineyard.com/getting-started-with-nokogiri
    end
    
    # collect the pdfs from these web pages
    manual_objects = []
    manual_web_pages.each do |manual_URL|
      manual_doc = Nokogiri::HTML(open(manual_URL))

      pdf_url = Manual.get_pdf(manual_doc)
      thumbnail_url = Manual.get_pdf_thumbnail(pdf_url)
      manual_title = Manual.get_title(manual_doc)
      new_manual_object = Manual.new(manufacturer, model, manual_title, pdf_url, thumbnail_url)
      manual_objects << new_manual_object
    end
    return manual_objects
  end
  
  def self.get_pdf(manual_doc)
    if manual_doc.css('a.ctrl-btn-pdf') && manual_doc.css('a.ctrl-btn-pdf').first
      return manual_doc.css('a.ctrl-btn-pdf').first.attributes["href"].value
    else
      return
    end
  end

  def self.get_pdf_thumbnail(pdf_url)
    # https://discourse.shrinerb.com/t/create-a-thumbnail-from-pdf-file/69 
    return pdf_url #needs to be converted to thumbnail
  end

  def self.get_title(manual_doc)
    if manual_doc.css('h1.heading') 
      return manual_doc.css('h1.heading').first.children.first.text
    else
      return
    end
  end

  def self.convert_model(manufacturer, model)
    # convert some model numbers, otherwise return original model number
    if manufacturer.downcase == "kenmore"
      parts = model.split(".")
      if parts.count > 1
        return parts[0]+"."+parts[1][0..2]
      end
    end
    return model
  end
end

# for manualsonline
# def self.get_manual(manufacturer, model)
#   # for manualslib.com
#   search_term = "#{manufacturer}+#{model}"
  #   manuals_search_url = "https://www.manualslib.com/1/#{search_term}.html"
  #   manuals_pdf_url_prefix = "https://www.manualslib.com"

  #   doc = Nokogiri::HTML(open(manuals_search_url))
  #   manuals = []
  #   doc.xpath('//h3/a').each do |node|
  #     manuals << manuals_pdf_url_prefix+node.attributes["href"]
  #     # https://blog.engineyard.com/getting-started-with-nokogiri
  #   end
  #   return manuals
  # end