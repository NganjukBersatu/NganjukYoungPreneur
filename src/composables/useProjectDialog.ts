import { ref } from 'vue'
import type { Project } from '../types'

export const selected = ref<Project | null>(null)
export const openProject = (p: Project) => {
  selected.value = p
}