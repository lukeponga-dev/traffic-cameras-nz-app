"use client";

import { useState, useEffect, useCallback } from 'react';

const FAVORITES_KEY = 'kiwi-traffic-watch-favorites';

export function useFavorites() {
    const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        try {
            const item = window.localStorage.getItem(FAVORITES_KEY);
            if (item) {
                setFavoriteIds(JSON.parse(item));
            }
        } catch (error) {
            console.error("Failed to parse favorites from localStorage", error);
            setFavoriteIds([]);
        }
        setIsLoaded(true);
    }, []);

    const updateLocalStorage = (ids: string[]) => {
         try {
            window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(ids));
        } catch (error) {
            console.error("Failed to set favorites in localStorage", error);
        }
    };

    const addFavorite = useCallback((id: string) => {
        setFavoriteIds(prevIds => {
            if (prevIds.includes(id)) return prevIds;
            const newIds = [...prevIds, id];
            updateLocalStorage(newIds);
            return newIds;
        });
    }, []);

    const removeFavorite = useCallback((id: string) => {
        setFavoriteIds(prevIds => {
            const newIds = prevIds.filter(favId => favId !== id);
            updateLocalStorage(newIds);
            return newIds;
        });
    }, []);
    
    const toggleFavorite = useCallback((id: string) => {
        setFavoriteIds(prevIds => {
            const isFav = prevIds.includes(id);
            const newIds = isFav ? prevIds.filter(favId => favId !== id) : [...prevIds, id];
            updateLocalStorage(newIds);
            return newIds;
        });
    }, []);

    const isFavorite = useCallback((id: string) => {
        return favoriteIds.includes(id);
    }, [favoriteIds]);

    return { favoriteIds, addFavorite, removeFavorite, isFavorite, toggleFavorite, isLoaded };
}
