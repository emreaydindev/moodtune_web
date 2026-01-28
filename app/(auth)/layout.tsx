import "../globals.css";
import ThemeRegistry from "@/components/ThemeRegistery";
import { AuthStack } from "./components/AuthStack";
import { AuthContainer } from "./components/AuthContainer";
import Logo from "@/components/Logo";
import { Dancing_Script, Great_Vibes } from "next/font/google";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing-script",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dancingScript.variable}`}>
      <body>
        <ThemeRegistry>
          <AuthStack>
            <AuthContainer>
              <Logo />
              <div className="h-4" />
              {children}
            </AuthContainer>
          </AuthStack>
        </ThemeRegistry>
      </body>
    </html>
  );
}
