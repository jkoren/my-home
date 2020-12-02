class UpdatePossessionService
  def initialize(possession, params)
    @possession = possession
    @params = params
  end

  def call
    if @params[:active_storage_image] && !file?(@params[:active_storage_image])
      delete_active_storage_image if @possession.active_storage_image.attached?
      @params.delete(:active_storage_image)
    end

    @possession.update(@params)
  end

  private

  def file?(param)
    param.is_a?(ActionDispatch::Http::UploadedFile)
  end

  def delete_active_storage_image
    @possession.active_storage_image.purge
  end
end