import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { ResumeData } from "@/lib/types";

interface BlogsProps {
    blogs: ResumeData["blogs"];
}

interface BlogCardProps {
    title: string;
    techStack: string[];
    description: string;
    link: {
        label: string;
        href: string;
    };
    type?: "talk" | "blog";
}

function BlogCard({
    title,
    techStack,
    description,
    link,
    type
}: BlogCardProps) {
    return (
        // add href link to the blog using link prop
        <a href={link.href} target="_blank" rel="noopener noreferrer" className="h-full flex flex-col overflow-hidden border p-3">
        <Card>
            <CardHeader>
                <div className="space-y-1">
                    <CardTitle className="text-base">
                        {title}
                    </CardTitle>
                    <CardDescription className="text-sm text-foreground/80 print:text-[12px]">
                        {/* fade text for description */}
                        <span className="opacity-50 print:opacity-60">
                            {description}
                        </span>
                    </CardDescription>
                </div>
            </CardHeader>
        </Card>
        </a>
    )
}


export function Blogs({
    blogs
}: BlogsProps) {
    return (
        <Section>
            <h2 className="text-xl font-bold" id="blogs">Blogs</h2>
            <div className="space-y-4">
                {blogs.map((blog) => (
                    <BlogCard key={blog.title} {...blog} />
                ))}
            </div>
        </Section>
    )
}