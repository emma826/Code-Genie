import {
	SidebarInset,
	SidebarProvider,
  } from "@/components/ui/sidebar"

  import { AppSidebar } from "@/components/utilities/app-sidebar"
import { Header } from "@/components/utilities/header"

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (

		<SidebarProvider>
			<AppSidebar />
			<SidebarInset>
				<Header />
				{children}

			</SidebarInset>
		</SidebarProvider>
	)
}
