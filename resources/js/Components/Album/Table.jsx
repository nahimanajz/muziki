import ActionIcons from "../ActionIcons";

export default function Table({ data }) {
    const thClx =
        "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider";
    const tdClx = "px-6 py-4 whitespace-nowrap";
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className={thClx}>Name</th>
                    <th className={thClx}>Artist</th>
                    <th className={thClx}>url</th>
                    <th className={thClx}>Play count</th>
                    <th className={thClx}>Release date</th>

                    <th className={thClx}>Action </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {data &&
                    data.map((record, index) => (
                        <tr key={index}>
                            <td className={tdClx}>{record.name}</td>
                            <td className={tdClx}>{record.artist}</td>
                            <td className={tdClx}>{record.url}</td>
                            <td className={tdClx}>{record.playCount}</td>
                            <td className={tdClx}>{record.published}</td>
                            <ActionIcons
                                onDelete={undefined}
                                onEdit={undefined}
                                onShowDetail={undefined}
                            />
                        </tr>
                    ))}
            </tbody>
        </table>
    );
}
