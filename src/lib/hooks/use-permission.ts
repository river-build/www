import { useCallback, useEffect, useState } from 'react'

// Function to check microphone permission
async function checkMicrophonePermission(): Promise<boolean> {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    stream.getTracks().forEach((track) => track.stop())
    return true
  } catch (error) {
    return false
  }
}

// Function to trigger microphone permission request
async function requestMicrophonePermission(): Promise<boolean> {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    stream.getTracks().forEach((track) => track.stop())
    return true
  } catch (error) {
    return false
  }
}

interface PermissionState {
  [key: string]: 'granted' | 'denied' | 'prompt'
}

// Hook to manage microphone permission
export function usePermission(): {
  permission: PermissionState
  requestPermission: () => Promise<void>
} {
  const [permission, setPermission] = useState<PermissionState>({
    microphone: 'prompt',
  })

  const checkPermission = useCallback(async () => {
    const permissionStatus = await checkMicrophonePermission()
    setPermission({
      microphone: permissionStatus ? 'granted' : 'denied',
    })
  }, [])

  useEffect(() => {
    checkPermission()
  }, [checkPermission])

  const requestPermission = useCallback(async () => {
    const granted = await requestMicrophonePermission()
    setPermission({
      microphone: granted ? 'granted' : 'denied',
    })
  }, [])

  return {
    permission,
    requestPermission,
  }
}
