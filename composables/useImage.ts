import { ref } from 'vue'

const useImage = () => {
  const selectedFile = ref<File | null>(null)
  const previewUrl = ref<string | null | ArrayBuffer>(
    'https://res.cloudinary.com/dat9zyjdy/image/upload/v1700463925/KhoiAnh/empty.png'
  )

  const previewImage = (file: File) => {
    const reader = new FileReader()

    reader.onload = () => {
      previewUrl.value = reader.result
    }

    reader.readAsDataURL(file)
    selectedFile.value = file

    return { selectedFile, previewUrl: reader.result }
  }

  return { selectedFile, previewUrl, previewImage }
}

export default useImage
