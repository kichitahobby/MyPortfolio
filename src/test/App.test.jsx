import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from '../App';

describe('App Component - Detailed Tests', () => {

    describe('Navigation & Header', () => {
        it('renders the branding logo with .dev suffix', () => {
            render(<App />);
            // ロゴ部分を特定するために、header内を検索
            const header = screen.getByRole('banner');
            expect(within(header).getByText(/kichita/)).toBeInTheDocument();
            expect(within(header).getByText(/.dev/)).toBeInTheDocument();
        });

        it('renders all navigation links', () => {
            render(<App />);
            const nav = screen.getByRole('navigation');
            const navItems = ['profile', 'skills', 'projects'];
            navItems.forEach(item => {
                const link = within(nav).getByRole('link', { name: new RegExp(item, 'i') });
                expect(link).toHaveAttribute('href', `#${item}`);
            });
        });
    });

    describe('Hero Section', () => {
        it('renders the main hello message', () => {
            render(<App />);
            const hero = screen.getByRole('main').querySelector('section');
            expect(within(hero).getByText(/Hello,/i)).toBeInTheDocument();
            expect(within(hero).getByText(/I'm/i)).toBeInTheDocument();
            expect(within(hero).getByText(/kichita/i)).toBeInTheDocument();
        });

        it('renders both CTA buttons', () => {
            render(<App />);
            expect(screen.getByRole('link', { name: /Check My Work/i })).toBeInTheDocument();
            expect(screen.getByRole('link', { name: /About Me/i })).toBeInTheDocument();
        });
    });

    describe('Profile & Career Section', () => {
        it('renders the correct profile description', () => {
            render(<App />);
            expect(screen.getByText(/2020年に新卒でSI企業に入社し/)).toBeInTheDocument();
            // 複数ある場合はgetAllByTextでチェック
            expect(screen.getAllByText(/GitHub Copilot/i).length).toBeGreaterThan(0);
        });

        it('renders all experience items from the timeline', () => {
            render(<App />);
            expect(screen.getByText(/WEBシステムのリバースエンジニアリング/)).toBeInTheDocument();
            expect(screen.getByText(/WEBシステムの開発保守/)).toBeInTheDocument();
            expect(screen.getByText(/現在のSI企業に入社/)).toBeInTheDocument();
        });

        it('shows Qiita link with correct username', () => {
            render(<App />);
            // 複数のリンクがあるため、text内容で特定
            const qiitaLinks = screen.getAllByRole('link', { name: /kichita/i });
            const userLink = qiitaLinks.find(link => link.getAttribute('href')?.includes('qiita.com'));
            expect(userLink).toHaveAttribute('href', 'https://qiita.com/kichita');
        });
    });

    describe('Skills Section', () => {
        it('renders skill category titles', () => {
            render(<App />);
            expect(screen.getByText(/Frontend/i)).toBeInTheDocument();
            expect(screen.getByText(/Backend/i)).toBeInTheDocument();
            expect(screen.getByText(/Workflow/i)).toBeInTheDocument();
        });

        it('renders specific skill tags', () => {
            render(<App />);
            // 複数箇所（スキル、経歴）にあるためgetAllByTextを使用
            expect(screen.getAllByText(/React/i).length).toBeGreaterThan(0);
            expect(screen.getAllByText(/TypeScript/i).length).toBeGreaterThan(0);
            expect(screen.getAllByText(/C#/i).length).toBeGreaterThan(0);
            expect(screen.getAllByText(/SQL Server/i).length).toBeGreaterThan(0);
        });
    });

    describe('Projects Section', () => {
        it('renders the portfolio project details', () => {
            render(<App />);
            expect(screen.getByText(/Portfolio Website/i)).toBeInTheDocument();
            expect(screen.getByText(/仕様駆動開発/)).toBeInTheDocument();
        });

        it('shows the "Coming Soon" placeholder', () => {
            render(<App />);
            expect(screen.getByText(/Coming Soon.../i)).toBeInTheDocument();
        });
    });

    describe('Footer', () => {
        it('renders copyright with current year', () => {
            render(<App />);
            const currentYear = new Date().getFullYear().toString();
            // フッター内を特定して検索
            const footer = screen.getByRole('contentinfo');
            expect(within(footer).getByText(new RegExp(`©.*${currentYear}.*kichita`, 'i'))).toBeInTheDocument();
        });
    });
});
