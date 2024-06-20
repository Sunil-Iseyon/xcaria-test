import { useState, useEffect } from 'react'
import { fetchProjects } from '../services/projectService'

type Project = {
    
}

export const useProject = () => {
  const [users, setProjects] = useState(null)

  useEffect(() => {
    const fetchAndSetProjects = async () => {
      const projects = await fetchProjects()
      setProjects(projects)
    }

    fetchAndSetProjects()
  }, [])

  return users
}