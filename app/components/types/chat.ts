export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface ConversationThread {
  id: string;
  title: string;
  messages: Message[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ConversationHeaderProps {
  title: string;
  socketStatus: string;
  isMobile: boolean;
  onMenuOpen: () => void;
  onNewThread: () => void;
  onClearThreads: () => void;
} 