import { useState } from "react"
import { Button } from "@/components/ui/button"

export function ApiSettings() {
  const [apiKey, setApiKey] = useState("")
  const [baseUrl, setBaseUrl] = useState("https://example.com/v1")

  const handleSave = () => {
    // In a production app, save to secure storage or state management
    localStorage.setItem("s1_api_key", apiKey)
    localStorage.setItem("s1_base_url", baseUrl)
    alert("API Settings Saved!")
  }

  return (
    <div className="bg-secondary/50 p-6 rounded-xl border border-border w-full max-w-md mx-auto mt-8">
      <h2 className="text-foreground font-bold mb-4">API Configuration</h2>
      <div className="space-y-4">
        <div>
          <label className="text-xs text-muted-foreground uppercase tracking-wider">Base URL</label>
          <input
            type="text"
            value={baseUrl}
            onChange={(e) => setBaseUrl(e.target.value)}
            className="w-full bg-background border border-input rounded-md px-3 py-2 text-foreground focus:ring-1 focus:ring-primary outline-none"
            placeholder="https://example.com/v1"
          />
        </div>
        <div>
          <label className="text-xs text-muted-foreground uppercase tracking-wider">API Key</label>
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full bg-background border border-input rounded-md px-3 py-2 text-foreground focus:ring-1 focus:ring-primary outline-none"
            placeholder="Enter your API key"
          />
        </div>
        <Button onClick={handleSave} className="w-full">Save API Configuration</Button>
      </div>
    </div>
  )
}