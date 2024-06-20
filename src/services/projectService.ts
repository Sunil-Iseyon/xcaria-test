import { createClient } from '@/src/utils/supabase/server'

export const fetchProjects = async () => {
  const supabase = createClient()
  const { data, error } = await supabase.from('projects').select('*')

  if (error) {
    throw error
  }

  return data
}