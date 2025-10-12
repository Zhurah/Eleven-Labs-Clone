// src/types.ts

// Type pour la réponse de l'API lors de la génération standard
export interface StandardTTSRequest {
    text: string;
    voice?: string;
}

// Type pour la réponse de l'API lors du clonage de voix
export interface ClonedTTSRequest {
    text: string;
    voice_id: string;
    language: string;
}

// Type pour les erreurs de l'API
export interface ApiError {
    message: string;
    detail?: string;
}

//Type pour le sélecteur de voix
export type VoiceType = 'standard' | 'cloned';


//Type pour les voix disponibles
export interface Voice {
    voice_id: string;
    file_size?: number;
    created_at?: number;
}

//Type pour les clones de voix
export interface VoicesListResponse {
    success: boolean;
    count: number;
    voices: Voice[];
}
