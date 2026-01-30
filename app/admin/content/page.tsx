'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Content {
  id: string;
  key: string;
  title: string;
  content: string;
  published: boolean;
}

export default function ContentManagement() {
  const router = useRouter();
  const [contents, setContents] = useState<Content[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formData, setFormData] = useState({ title: '', content: '' });

  useEffect(() => {
    fetchContents();
  }, []);

  const fetchContents = async () => {
    const res = await fetch('/api/content');
    const data = await res.json();
    setContents(data);
  };

  const handleEdit = (content: Content) => {
    setEditingId(content.id);
    setFormData({ title: content.title, content: content.content });
  };

  const handleSave = async (id: string) => {
    await fetch('/api/content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...formData }),
    });
    setEditingId(null);
    fetchContents();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Kelola Konten Website</h1>
            <button
              onClick={() => router.push('/admin/dashboard')}
              className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
            >
              Kembali
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          {contents.map((content) => (
            <div key={content.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{content.key}</h3>
                  <p className="text-sm text-gray-500">Konten untuk halaman website</p>
                </div>
                {editingId === content.id ? (
                  <div className="space-x-2">
                    <button
                      onClick={() => handleSave(content.id)}
                      className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                    >
                      Simpan
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                    >
                      Batal
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleEdit(content)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    Edit
                  </button>
                )}
              </div>

              {editingId === content.id ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Judul</label>
                    <input
                      type="text"
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="w-full px-4 py-2 border rounded"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Konten</label>
                    <textarea
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      rows={10}
                      className="w-full px-4 py-2 border rounded"
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <h4 className="font-semibold mb-2">{content.title}</h4>
                  <p className="text-gray-700 whitespace-pre-wrap">{content.content.substring(0, 200)}...</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
