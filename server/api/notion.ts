import { Client } from '@notionhq/client'
import { defineEventHandler } from 'h3'
import { useRuntimeConfig } from '#imports'
import type { rowsStructured } from '~~/types/type'

export default defineEventHandler(async () => {
  const config = useRuntimeConfig()
  const notionApiKey = config.notionApiKey
  const databaseId = config.notionDatabaseId

  const notion = new Client({ auth: notionApiKey })

  if (!notionApiKey || !databaseId)
    throw new Error('Mission Api Key or database Id.')

  const query = await notion.databases.query({
    database_id: databaseId,
  })

  type Row = {
    person_number: { id: string; number: number }
    Created: { id: string; created_time: Date }
    cook_time: { id: string; rich_text: { plain_text: string }[] }
    Projects: { id: string; title: { plain_text: string }[] }
    paragraph: { id: string }
  }

  // @ts-expect-error because
  const rows = query.results.map((res) => res.properties) as Row[]

  const rowsStructured: rowsStructured[] = rows.map((row) => ({
    title: row.Projects.title[0]?.plain_text,
    cook_time: row.cook_time.rich_text[0]?.plain_text,
    person_number: row.person_number?.number,
    created_at: row.Created.created_time,
  }))
  return rowsStructured
})
