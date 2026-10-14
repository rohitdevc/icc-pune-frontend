import { generateMetadata as createMetadata } from '@/components/utils/generateMetadata';
import { getDevelopment } from '@/lib/developments';
import { notFound } from "next/navigation";
import ProjectPage from '@/components/pages/project';

type PageProps = {
  params: Promise<{
    "project-category-url-slug": string,
    "project-url-slug": string
  }>
}

export async function generateMetadata({ params }: PageProps) {
  const { "project-category-url-slug": project_category_url_slug, "project-url-slug": project_url_slug } = await params;
  
  const [meta_data] = await Promise.all([
    getDevelopment(project_category_url_slug, project_url_slug)
  ]);

  if(!meta_data) {
    notFound();
  }

  const banner = meta_data;

  return createMetadata({
    meta_data,
    banner,
  });
}

export default async function Page({ params }: PageProps) {
  const { "project-category-url-slug": project_category_url_slug, "project-url-slug": project_url_slug } = await params;

  const project = await getDevelopment(project_category_url_slug, project_url_slug);

  if(!project) {
    notFound();
  }

  return (
    <ProjectPage
    project={project}
    />
  )
}