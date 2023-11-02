import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ConvexClientProvider } from "@/components/providers/ConvexProvider";
import { ModalProvider } from "@/components/providers/ModalProvider";
import "./globals.css";
import { EdgeStoreProvider } from "@/lib/edgestore";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Note+",
	description: "Create beautiful notes here.",
	icons: {
		icon: [
			{
				media: "(prefers-color-scheme:light)",
				url: "/logo.svg",
				href: "/logo.svg",
			},
			{
				media: "(prefers-color-scheme:dark)",
				url: "/logo-dark.svg",
				href: "/logo-dark.svg",
			},
		],
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={inter.className}>
				<ConvexClientProvider>
					<EdgeStoreProvider>
						<ThemeProvider
							attribute="class"
							defaultTheme="system"
							enableSystem
							disableTransitionOnChange
							storageKey="notion-theme"
						>
							<Toaster position="bottom-center" />
							<ModalProvider />
							{children}
						</ThemeProvider>
					</EdgeStoreProvider>
				</ConvexClientProvider>
			</body>
		</html>
	);
}
