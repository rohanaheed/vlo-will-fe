import React, { useState } from "react";
import LeftSidebar from "./components/LeftSidebar";
import EmailListPane from "./components/EmailListPane";
import EmailDetailPane from "./components/EmailDetailPane";
import { emails } from "./components/mockData";

function Page() {
  const [activeFolder, setActiveFolder] = useState("inbox");
  const [selectedEmailId, setSelectedEmailId] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showDetailOnMobile, setShowDetailOnMobile] = useState(false);

  // Filter emails based on the active folder
  const filteredEmails = emails.filter((email) => {
    if (activeFolder === "sent") return false;
    if (activeFolder === "drafts") return email.id === 1;
    if (activeFolder === "delete") return false;
    return true;
  });

  const handleEmailSelect = (id) => {
    setSelectedEmailId(id);
    setShowDetailOnMobile(true);
  };

  const handleFolderChange = (folderId) => {
    setActiveFolder(folderId);
    setSelectedEmailId(null);
    setIsSidebarOpen(false); // Close sidebar on mobile after selection
  };

  const selectedEmailData = emails.find((e) => e.id === selectedEmailId);

  return (
    <div
      className="w-full flex bg-white rounded-xl overflow-hidden relative min-h-125 h-[calc(100vh-255px)] md:h-[calc(100vh-339px)]"
      // style={{ height: "calc(100vh - 342px)", minHeight: "500px" }}
    >
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="min-[1400px]:hidden fixed inset-0 bg-black/40 z-40 transition-opacity cursor-pointer"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Left Sidebar */}
      <div
        className={`
        absolute min-[1400px]:relative z-50 h-full transition-transform duration-300
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full min-[1400px]:translate-x-0"}
      `}
      >
        <LeftSidebar activeId={activeFolder} onTabChange={handleFolderChange} />
      </div>

      {/* Middle and Right Container */}
      <div className="flex-1 flex w-full relative overflow-hidden">
        {/* Email List Pane */}
        <div
          className={`
          w-full md:w-[40%] min-[1400px]:w-[360px] h-full shrink-0 md:border-r border-gray-200 
          absolute md:relative transition-transform duration-300 z-20 md:z-auto bg-white
          ${showDetailOnMobile ? "-translate-x-full md:translate-x-0" : "translate-x-0"}
        `}
        >
          <EmailListPane
            folderName={activeFolder}
            emails={filteredEmails}
            selectedEmailId={selectedEmailId}
            onEmailSelect={handleEmailSelect}
            onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          />
        </div>

        {/* Email Detail Pane */}
        <div
          className={`
          w-full md:w-[60%] min-[1400px]:flex-1 h-full absolute md:relative z-30 md:z-auto bg-white transition-transform duration-300
          ${showDetailOnMobile ? "translate-x-0" : "translate-x-full md:translate-x-0"}
        `}
        >
          {selectedEmailData ? (
            <EmailDetailPane
              email={selectedEmailData}
              onBack={() => setShowDetailOnMobile(false)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 bg-gray-50/50 hidden md:flex">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4 border border-gray-100">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <p>Select an email to read</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Page;
