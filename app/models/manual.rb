class Manual
  # def initialize(manufacturer, model,pdfURLs,pdfURL)
  #   @manufacturer = manufacturer
  #   @model = model
  #   @pdfURLs = Manual.get_manual_pdfs
  #   @pdfURL = Manual.get_manual_pdfs.first
  # end

  def self.get_manual_pdf(manufacturer, model)
    pdfs = Manual.get_manual_pdfs(manufacturer, model)
    return pdfs.first
  end

  def self.get_manual_pdfs(manufacturer, model) #add max_number_of_manuals parameter
    converted_model = Manual.convert_model(manufacturer, model)
    
    manuals_search_url = "http://www.manualsonline.com/search.html?q=#{manufacturer}%20#{converted_model}"
    
    doc = Nokogiri::HTML(open(manuals_search_url))
    manual_urls = []
  
    max_number_of_manuals = 5
    doc.xpath('//h5/a').take(max_number_of_manuals).each do |node|
      theURL = node.attributes["href"].value
      if theURL.start_with?("http") #exclude support inquiries
        manual_urls << theURL 
      end
      # https://blog.engineyard.com/getting-started-with-nokogiri
    end
    
    # collect the pdfs for these URLS
    manual_pdfs = []
    manual_urls.each do |manual_URL|
      manual_pdfs << Manual.get_pdf(manual_URL)
    end
    return manual_pdfs
  end
  
  def self.get_pdf(manual_URL)
    manual_doc = Nokogiri::HTML(open(manual_URL))
    if manual_doc.css('a.ctrl-btn-pdf') && manual_doc.css('a.ctrl-btn-pdf').first
      return manual_doc.css('a.ctrl-btn-pdf').first.attributes["href"].value
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