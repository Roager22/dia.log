import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: 'h6rh2wq1',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
  token: import.meta.env.VITE_SANITY_TOKEN, // Add token for authentication

})

// Helper functions for fetching different types of content
export async function getTestimonials() {
  try {
    return await client.fetch(`*[_type == "testimonial"] | order(_createdAt desc){
      name,
      role,
      content,
      "avatar": avatar.asset->url
    }`)
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getStages() {
  try {
    return await client.fetch(`*[_type == "stage"] | order(order asc){
      title,
      description,
      order
    }`)
  } catch (error) {
    console.error('Error fetching stages:', error)
    return []
  }
}

export async function getProblems() {
  try {
    return await client.fetch(`*[_type == "problem"]{
      title,
      description,
      solution
    }`)
  } catch (error) {
    console.error('Error fetching problems:', error)
    return []
  }
}

export async function getSpecialist() {
  const query = `*[_type == "specialist"][0]{
    name,
    "photo": photo.asset->url,
    description,
    qualifications
  }`;
  return await client.fetch(query);
}

// Add this function to your existing sanity.js file

// Add this function if it doesn't exist yet
export async function getAreas() {
  try {
    return await client.fetch(`*[_type == "areasWorks"]{
      title,
      description,
      "icon": icon.asset->url,
      workMethods,
      techniques
    }`)
  } catch (error) {
    console.error('Error fetching areas:', error)
    return []
  }
}