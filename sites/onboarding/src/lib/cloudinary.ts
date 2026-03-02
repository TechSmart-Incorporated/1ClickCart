import axios from 'axios'

export type CloudinaryAssetKind = 'logo' | 'banner'

export type CloudinaryStoredAsset = {
  secureUrl: string
  publicId: string
}

export type CloudinaryUploadResponse = CloudinaryStoredAsset & {
  assetId?: string
  originalFilename?: string
}

const uploadEndpoint = import.meta.env.VITE_CLOUDINARY_UPLOAD_ENDPOINT?.trim() ?? ''
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET?.trim() ?? ''

function getStorageKey(kind: CloudinaryAssetKind) {
  return `onboarding.cloudinary.${kind}`
}

export function getStoredBrandAsset(
  kind: CloudinaryAssetKind,
): CloudinaryStoredAsset | null {
  if (typeof window === 'undefined') {
    return null
  }

  const storedValue = window.localStorage.getItem(getStorageKey(kind))

  if (!storedValue) {
    return null
  }

  try {
    const parsedValue = JSON.parse(storedValue) as Partial<CloudinaryStoredAsset>

    if (!parsedValue.publicId || !parsedValue.secureUrl) {
      return null
    }

    return {
      secureUrl: parsedValue.secureUrl,
      publicId: parsedValue.publicId,
    }
  } catch {
    return null
  }
}

function setStoredBrandAsset(
  kind: CloudinaryAssetKind,
  asset: CloudinaryStoredAsset,
) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.setItem(getStorageKey(kind), JSON.stringify(asset))
}

export function clearStoredBrandAsset(kind: CloudinaryAssetKind) {
  if (typeof window === 'undefined') {
    return
  }

  window.localStorage.removeItem(getStorageKey(kind))
}

export function deleteBrandAsset(kind: CloudinaryAssetKind) {
  clearStoredBrandAsset(kind)
}

export async function uploadBrandAsset(
  file: File,
  kind: CloudinaryAssetKind,
): Promise<CloudinaryUploadResponse> {
  if (!uploadEndpoint) {
    throw new Error('Missing VITE_CLOUDINARY_UPLOAD_ENDPOINT.')
  }

  if (!uploadPreset) {
    throw new Error('Missing VITE_CLOUDINARY_UPLOAD_PRESET.')
  }

  const existingAsset = getStoredBrandAsset(kind)
  const formData = new FormData()
  formData.append('file', file)
  formData.append('upload_preset', uploadPreset)

  if (existingAsset?.publicId) {
    formData.append('public_id', existingAsset.publicId)
  }

  const response = await axios.post(uploadEndpoint, formData)

  const data = response.data as {
    secure_url?: string
    public_id?: string
    asset_id?: string
    original_filename?: string
  }

  if (!data.secure_url || !data.public_id) {
    throw new Error('Upload response was missing secure_url or public_id.')
  }

  const result: CloudinaryUploadResponse = {
    secureUrl: data.secure_url,
    publicId: data.public_id,
    assetId: data.asset_id,
    originalFilename: data.original_filename,
  }

  setStoredBrandAsset(kind, {
    secureUrl: result.secureUrl,
    publicId: result.publicId,
  })

  return result
}
